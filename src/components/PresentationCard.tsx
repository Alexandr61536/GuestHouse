import { Group } from "@mantine/core"
import { CSSProperties } from "react"

type PresentationCardProps = {
    index: number,
}

export const PresentationCard: React.FC<PresentationCardProps> = ({ index }) => {

    const styles: {[key: string]: CSSProperties} = {
        even: {
            backgroundColor: "rgba(0, 0, 0, 0)", 
            justifyContent: "space-between",
            color: "white",

        },
        notEven: {
            backgroundColor: "white", 
            justifyContent: "space-between",
            color: "black",
        }
    }

    return(
        index % 2 !== 0 ? 
        <Group style={styles["notEven"]}>
            <div style={{backgroundColor: "rgb(165, 109, 109)", height: "500px", width: "500px"}}></div>
            <div style={{width: "calc(100% - 700px)"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eveniet quia vero! Tempora eos atque, provident at suscipit facilis iusto in ab earum voluptatum corrupti debitis recusandae asperiores dicta amet.
            </div>
        </Group>
        :
        <Group style={styles["even"]}>
            <div style={{width: "calc(100% - 700px)"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eveniet quia vero! Tempora eos atque, provident at suscipit facilis iusto in ab earum voluptatum corrupti debitis recusandae asperiores dicta amet.
            </div>
            <div style={{backgroundColor: "rgb(165, 109, 109)", height: "500px", width: "500px"}}></div>
        </Group>
    )
}