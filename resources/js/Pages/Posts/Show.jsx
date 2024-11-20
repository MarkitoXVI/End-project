import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show({ auth, post }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={post.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Post Title */}
                            <h2 className="text-3xl font-bold text-blue-700 mb-6">{post.title}</h2>

                            {/* Author and Post Info */}
                            <div className="mb-6 text-gray-600">
                                <p>
                                    <span className="font-semibold">Posted by:</span> {post.owner.name || 'Anonymous'}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {/* Add any additional post info like date if needed */}
                                    {/* Posted on: {new Date(post.created_at).toLocaleDateString()} */}
                                </p>
                            </div>

                            {/* Post Content */}
                            <div className="prose max-w-none text-gray-800">
                                <p>{post.content}</p>
                            </div>

                            {/* Back to Posts Link */}
                            <div className="mt-6">
                                <Link
                                    href={route('posts.index')} // Goes back to the list of posts
                                    className="text-blue-500 hover:underline"
                                >
                                    Back to Posts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
