/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  sign_up: {
    $url: (url?: { hash?: string }) => ({ pathname: '/sign_up' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
