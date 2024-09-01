"use server"
import { signIn, signOut } from "@/auth"

export async function doSocialLogin(formData: FormData) {
    const action = formData.get("action") || "google"
    await signIn(action as string, {
        redirectTo: "/me"
    })
}

export async function doLogout() {
    await signOut({redirectTo: "/"})
}