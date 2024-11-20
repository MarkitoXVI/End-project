import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="bg-blue-50 dark:bg-gray-900 py-6 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 border-t-4 border-yellow-400">
                    <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 text-center mb-6">
                        Create Your Account
                    </h2>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <InputLabel htmlFor="name" value="Name" className="text-blue-700 dark:text-yellow-400" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2 text-yellow-600" />
                        </div>

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
                                onChange={(e) => setData('email', e.target.value)}
                                required
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2 text-yellow-600" />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                                className="text-blue-700 dark:text-yellow-400"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2 text-yellow-600" />
                        </div>

                        {/* Footer Links & Submit */}
                        <div className="flex items-center justify-between">
                            <Link
                                href={route('login')}
                                className="text-sm font-medium text-blue-600 dark:text-yellow-400 hover:underline"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton
                                className="px-6 py-2 bg-yellow-400 text-white font-medium rounded-md shadow-lg hover:bg-yellow-500 disabled:opacity-50"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
