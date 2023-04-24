import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Chat(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Chat</h2>}
        >

            <div className="">
                <div className="messenger p-4 bg-slate-500 h-screen overflow-hidden">
                <div className="flex">
                    <div className="basis-2/6 pt-3 bg-white border-r border-slate-100">
                    <div className="seatch-box h-10 text-slate-300">
                        <div className="flex justify-between px-5 border-b border-slate-200 pb-1">
                        <form action="">
                            <i className="fa fa-search"></i>
                            <input type="search" className="font-light border-0 hover:border-0 focus:ring-0 focus:outline-none" placeholder="Search"/>
                        </form>
                        <div>
                            <button>
                            <i className="fa fa-message"></i>
                            <i className="fa fa-plus absolute -top-2 text-sm"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="user-list overflow-y-auto h-screen">
                        <div className="flex transition px-5 py-3 hover:bg-slate-100 hover:cursor-pointer">
                        <div className="pr-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU" width="50"/>
                        </div>
                        
                        <div>
                            <h3 className="text-violet-500 text-md">
                            Lupe Faisco
                            </h3>
                            <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                            qwertyuuuu omo i no evrn know wetin dy sup like this sef
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="basis-4/6">
                    <div className="user-info-header bg-white px-5 py-3">
                        <div className="flex justify-between">
                        <div className="flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU" width="40"/>
                            <h3 className="text-md pl-4 text-gray-400">Lupe Faisco</h3>
                        </div>

                        <div>
                            <i className="fa fa-message text-violet-300"></i>
                            <i className="fa fa-video ml-3 text-gray-200"></i>
                            <i className="fa fa-phone ml-3 text-gray-200"></i>
                        </div>
                        </div>
                    </div>

                    <div className="messanger mt-4">

                        <div className="px-4">
                        <div className="recieve-chat relative flex justify-start">
                            <div className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded">
                            <i className="fa fa-caret-up text-violet-400 -top-2 absolute"></i>
                            <p>
                                I got two ticjets on thw=tnsisn shiff ihfin wina aln aif naf aian a nabgvj
                            </p>
                            </div>
                        </div>
                        
                        <div className="recieve-chat relative flex justify-start">
                            <div className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded">
                            <p>
                                I got two ticjets on thw=tnsisn shiff ihfin wina aln aif naf aian a nabgvj
                            </p>
                            </div>
                        </div>
                        <div className="recieve-chat relative flex justify-start">
                            <div className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded">
                            <p>
                                I got two ticjets on thw=tnsisn shiff ihfin wina aln aif naf aian a nabgvj
                            </p>
                            </div>
                        </div>
                        <div className="send-chat relative flex justify-end">
                            <div className="px-5 mb-2 bg-violet-200 text-slate-500 py-2 text-sm max-w-[80%] rounded">
                            <i className="fa fa-caret-up text-violet-200 -top-2 right-4 absolute"></i>
                            <p>
                                I got two ticjets on thw=tnsisn shiff ihfin wina aln aif naf aian a nabgvj
                            </p>
                            </div>
                        </div>
                        
                        <div className="send-chat relative flex justify-end">
                            <div className="px-5 mb-2 bg-violet-200 text-slate-500 py-2 text-sm max-w-[80%] rounded">
                            <p>
                                I got two ticjets on thw=tnsisn shiff ihfin wina aln aif naf aian a nabgvj
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="bg-gray-100 fixed bottom-0 w-full pl-4">
                        <textarea className="w-full bg-gray-100  border-0 hover:border-0 focus:ring-0 focus:outline-none pt-3 h-12 overflow-y-auto font-light" placeholder="Write a message"></textarea>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );  
}

Echo.join(`group_chat.${roomId}`)
    .listen('GroupChat', (e) => {
        console.log(e.message);
    });
