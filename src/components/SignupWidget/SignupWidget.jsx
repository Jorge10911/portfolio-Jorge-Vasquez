'use client';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime = 2000));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={'flex flex-col p-6 border border-zinc-100 dark:border-zinc-700/40 rounded-2xl w-[398px] h-[196px] gap-x-3'} onSubmit={handleSubmit} autoComplete={'false'}>
      <h2 className="flex flex-row items-center font-bold text-zinc-900 dark:text-zinc-100 gap-3 m-0 leading-7">
        <svg className="stroke-zinc-400 fill-zinc-100 dark:fill-zinc-100/5" width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.75 3.75V14.25C20.75 14.8467 20.5129 15.419 20.091 15.841C19.669 16.2629 19.0967 16.5 18.5 16.5H3.5C2.90326 16.5 2.33097 16.2629 1.90901 15.841C1.48705 15.419 1.25 14.8467 1.25 14.25V3.75M20.75 3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75M20.75 3.75V3.993C20.75 4.37715 20.6517 4.75491 20.4644 5.0903C20.2771 5.42569 20.0071 5.70754 19.68 5.909L12.18 10.524C11.8252 10.7425 11.4167 10.8582 11 10.8582C10.5833 10.8582 10.1748 10.7425 9.82 10.524L2.32 5.91C1.99292 5.70854 1.72287 5.42669 1.53557 5.0913C1.34827 4.75591 1.24996 4.37815 1.25 3.994V3.75" />
        <path d="M20.75 3.75V14.25C20.75 14.8467 20.5129 15.419 20.091 15.841C19.669 16.2629 19.0967 16.5 18.5 16.5H3.5C2.90326 16.5 2.33097 16.2629 1.90901 15.841C1.48705 15.419 1.25 14.8467 1.25 14.25V3.75M20.75 3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75M20.75 3.75V3.993C20.75 4.37715 20.6517 4.75491 20.4644 5.0903C20.2771 5.42569 20.0071 5.70754 19.68 5.909L12.18 10.524C11.8252 10.7425 11.4167 10.8582 11 10.8582C10.5833 10.8582 10.1748 10.7425 9.82 10.524L2.32 5.91C1.99292 5.70854 1.72287 5.42669 1.53557 5.0913C1.34827 4.75591 1.24996 4.37815 1.25 3.994V3.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {title}
      </h2>
      {isSubscribed ? (
        <p className="w-[350px] h-48 pt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-6">
          {message}
        </p>
      ) : (
        <>
          <p className="w-full lg:w-[350px] h-48 pt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-6">{content}</p>
          <div className="flex flex-row w-full lg:w-[350px] h-[64px] pt-6 gap-4">
            {
              <input
                className="p-2.5 flex w-4/5 h-10 dark:bg-zinc-700/20 border border-zinc-900/10 dark:border-zinc-700 rounded-md"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={busy}
              />
            }
            {
              <button className="px-2 py-3 w-1/5 h-[40px] bg-zinc-800 dark:bg-zinc-700 flex justify-center items-center rounded-md text-zinc-100 leading-4 text-sm gap-1" type="submit" disabled={busy}>
                {busy ? 'Joining...' : 'Join'}
              </button>
            }
          </div>
        </>
      )}
    </form>
  );
};

export default SignupWidget;
