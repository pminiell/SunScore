import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata, MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.assets())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />

      <main className="py-8 px-4 md:px-8 flex justify-center items-center">
        <Toaster toastOptions={{ className: 'bg-green-50 text-slate-800 border-l-4 border-green-400', duration: 6000 }} />
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          <div className="bg-green-400 rounded-t-lg px-6 py-4">
            <header>
              <h2 className="text-2xl font-bold text-slate-800">Login</h2>
            </header>
          </div>

          <div className="p-6">
            <div>
              <Form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <Label
                    name="username"
                    className="block text-sm font-medium text-slate-700 mb-1"
                    errorClassName="block text-sm font-medium text-red-600 mb-1"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    errorClassName="w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <Label
                    name="password"
                    className="block text-sm font-medium text-slate-700 mb-1"
                    errorClassName="block text-sm font-medium text-red-600 mb-1"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    errorClassName="w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <div className="flex justify-end mt-1">
                    <Link
                      to={routes.forgotPassword()}
                      className="text-sm text-green-600 hover:text-green-800 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FieldError name="password" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <Submit className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                    Login
                  </Submit>
                </div>
              </Form>
            </div>
          </div>

          <div className="bg-yellow-50 px-6 py-4 rounded-b-lg text-center">
            <span className="text-slate-700">Don't have an account?</span>{' '}
            <Link to={routes.signup()} className="text-green-600 hover:text-green-800 hover:underline font-medium">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
