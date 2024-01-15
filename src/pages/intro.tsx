import {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "../components/ui/alert-dialog"
import { Game } from "../pages/game"
import { useState} from "react"

export function IntroPage() {
    const [open, setOpen] = useState(false)

    if (open) {
        return <Game />
    }
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger className="text-2xl border-2 mx-auto px-4 py-2 rounded-md border-slate-900 text-slate-500 bg-slate-900 hover:bg-slate-800 hover:border-white hover:text-white">Play the Game</AlertDialogTrigger>
                <AlertDialogPortal>
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Welcome to the gods memory game?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This game requaires an amazing memory to achieve the biggest score.
                            </AlertDialogDescription>
                            <AlertDialogDescription>
                                Are you prepared for such a challenge?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => setOpen(true)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogPortal>
            </AlertDialog>
        </div>
    )
}