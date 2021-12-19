import { zodResolver } from "@hookform/resolvers/zod";
import type { NextPage } from "next";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState, VFC } from "react";
import { useForm, UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import useObjectURL from "use-object-url";
import { z } from "zod";

import { Button } from "@/components/Button";
import { Input, InputErrorMessage, Label } from "@/components/Input";

const AnonymousAvatar = () => {
  return (
    <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 cursor-pointer">
      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
};

const Avatar = ({ src }: { src: string }) => {
  return (
    <img className="inline-block h-20 w-20 rounded-full border border-gray-300" src={src} alt="" />
  );
};

type FileUploadProps = {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
};

const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as { ref: (instance: HTMLInputElement | null) => void };

  const handleClick = () => inputRef.current?.click();

  return (
    <div onClick={handleClick} className="w-max">
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      {children}
    </div>
  );
};

const signUpFormValues = z
  .object({
    avatar: z.any(),
    email: z.string(),
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

type SignUpFormValues = z.infer<typeof signUpFormValues>;

type SignUpFormProps = Pick<
  UseFormReturn<SignUpFormValues>,
  "register" | "handleSubmit" | "formState" | "watch"
> & { onSubmit: (v: SignUpFormValues) => void };

const SignUpForm: VFC<SignUpFormProps> = ({
  register,
  handleSubmit,
  formState,
  watch,
  onSubmit,
}) => {
  const watchAvatar = watch("avatar");
  const avatarSrc = useObjectURL(watchAvatar?.length ? watchAvatar[0] : null);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-96">
      <div className="space-y-2">
        <Label>Avatar</Label>
        <FileUpload register={register("avatar")}>
          {avatarSrc ? <Avatar src={avatarSrc} /> : <AnonymousAvatar />}
        </FileUpload>
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="Email" required {...register("email")} />
      </div>

      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          required
          minLength={8}
          {...register("password")}
        />
      </div>

      <div className="space-y-2">
        <Label>Password Confirmation</Label>
        <Input
          type="password"
          placeholder="Confirmation"
          required
          minLength={8}
          {...register("confirm")}
        />
        {formState.errors.confirm && (
          <InputErrorMessage>{formState.errors.confirm.message}</InputErrorMessage>
        )}
      </div>

      <div className="!mt-8">
        <Button className="!w-full">Sign Up</Button>
      </div>
    </form>
  );
};

const SignUpPage: NextPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormValues),
    defaultValues: {
      avatar: undefined,
      email: "",
      password: "",
      confirm: "",
    },
  });

  return (
    <div className="h-screen flex flex-col space-y-4 items-center pt-10">
      <div className="font-bold text-4xl">Twitter Clone</div>

      <SignUpForm
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        watch={watch}
        onSubmit={(v) => {
          if (v.avatar instanceof FileList && v.avatar.length) {
            console.log("avatar");
          }
          console.log(v);
        }}
      />
    </div>
  );
};

export default SignUpPage;
