import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { URLS } from 'routing/urls';
import { GoogleLogo } from 'components/icons';

export type FormData = {
  email: string;
  password: string;
};

export const Login = ({ onSubmit }: { onSubmit?: (formData: FormData) => unknown }) => {
  const refs = useRef(
    new Map([
      ['email', useRef<HTMLInputElement>(null)],
      ['password', useRef<HTMLInputElement>(null)]
    ])
  ).current;

  const onClickBtnSubmit = useRef((e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    for (const inputNode of refs.values()) {
      if (!inputNode.current?.checkValidity() ?? true) return;
    }

    const formData: FormData = {
      email: refs.get('email')?.current?.value ?? '',
      password: refs.get('password')?.current?.value ?? ''
    };

    onSubmit?.(formData);
  }).current;

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/600x600/?map,travel,route"
          alt="gis-map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Войти в приложение</h1>

          <form className="mt-6">
            <div>
              <label className="block text-gray-700">Электронная почта</label>
              <input
                ref={refs.get('email')}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Электронная почта"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Пароль</label>
              <input
                ref={refs.get('password')}
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                placeholder="Пароль"
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <Link
                to={URLS.LEVEL1.login}
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Забыли пароль?
              </Link>
            </div>

            <button
              type="submit"
              onClick={onClickBtnSubmit}
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <GoogleLogo />
              <span className="ml-4">Зайти с Google SSO</span>
            </div>
          </button>

          <p className="mt-8">
            <span>Нет акаунта?</span>
            <br />
            <Link to={URLS.LEVEL1.login} className="text-blue-500 hover:text-blue-700 font-semibold">
              Создать аккаунт
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
