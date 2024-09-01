import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
    return (
        <form action={doSocialLogin}>
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg" 
                type="submit" 
                name="action" 
                value="google">
                Sign In With Google
            </button>
        </form>
    );
};

export default LoginForm;
