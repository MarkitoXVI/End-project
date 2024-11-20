import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="bg-blue-50 dark:bg-gray-900 py-6 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 border-t-4 border-yellow-400">
                    <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center mb-6">
                        Welcome Back
                    </h2>

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-blue-700 dark:text-yellow-400" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2 text-yellow-600" />
                        </div>

                        {/* Password */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-blue-700 dark:text-yellow-400" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2 text-yellow-600" />
                        </div>

                        {/* Remember Me */}
                        <div className="block">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="text-blue-700 dark:text-yellow-400 focus:ring-yellow-400"
                                />
                                <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm font-medium text-blue-600 dark:text-yellow-400 hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton
                                className="px-6 py-2 bg-yellow-400 text-white font-medium rounded-md shadow-lg hover:bg-yellow-500 disabled:opacity-50"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
