import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleAuthProvider } from "../lib/firebase";

export default function Home() {
  const [user] = useAuthState(auth);

  const signIn = async () => {
    await auth
      .signInWithPopup(googleAuthProvider)
      .catch((e) => console.error(e));
  };

  const callFunction = async () => {
    const helloWorld = functions.httpsCallable("helloWorld");
    helloWorld()
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={signIn}>Login with Google</button>
      <button onClick={callFunction}>Call Function</button>
    </div>
  );
}
