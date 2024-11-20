import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Index({ auth, posts }) {
    const [deletingPost, setDeletingPost] = useState(null);

    const deletePost = (post) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            router.delete(route('posts.destroy', post.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold">Posts</h2>
                                <Link
                                    href={route('posts.create')}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Create Post
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                                    >
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                            <p className="text-gray-600 mb-4">{post.name}</p>
                                            <div className="text-gray-500 text-sm mb-4">
                                                By {post.owner.name}
                                            </div>
                                            <p className="text-gray-700 mb-4 line-clamp-3">
                                                {post.content}
                                            </p>
                                            <div className="flex justify-end space-x-2">
                                                <Link
                                                    href={route('posts.edit', post.id)}
                                                    className="text-blue-500 hover:text-blue-700"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => deletePost(post)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    Delete
                                                </button>
                                                <Link
                                                    href={route('posts.show', post.id)}
                                                    className="text-green-500 hover:text-green-700"
                                                >
                                                    Show Full Article
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
