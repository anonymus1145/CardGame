import SingleCard from "@/components/objects/SingleCard"

export function Game() {
    setTimeout(() => {
        alert("Don't choose the same card twice!!!")
    }, 1000)

    return (
        <div className="flex justify-center items-center">
           <SingleCard/>
           <SingleCard/>
           <SingleCard/>
           <SingleCard/>
           <SingleCard/>
           <SingleCard/>
           <SingleCard/>
           <SingleCard/>
        </div>
    )
}