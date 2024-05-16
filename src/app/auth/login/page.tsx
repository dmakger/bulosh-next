import { AuthType } from "@/shared/data/login.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { AuthBlock } from "@/widgets/Auth/Block/AuthBlock";

export default function LoginPage() {
    return (
        <Wrapper1280>
            <AuthBlock type={AuthType.Login} />
        </Wrapper1280>
    )
}
