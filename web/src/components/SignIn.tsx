import { User } from 'lucide-react'

export default function SignIn() {
  return (
    <a
      href={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&scope=openid%20email&nonce=0394852-3190485-2490358`}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
        <User className="h-5 w-5 text-gray-500" />
      </div>
      <p className="text-sm leading-snug">
        <span className="underline">Crie sua conta</span> e salve suas memórias
      </p>
    </a>
  )
}
