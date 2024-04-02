
export default function userProfile ({params} : any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Profile</h1>
            <hr />
            <p className="text-3xl">Profile Page :</p>
            <span className="text-2xl"> contact No. {params.id}</span>
        </div>
    )
}