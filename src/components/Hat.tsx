import { Center, Stack } from "@mantine/core"
import { CSSProperties } from "react"

type HatProps = {
    description: string,
    title: string,
}

export const Hat: React.FC<HatProps> = ({description, title}) => {

    const styles: {[key: string]: CSSProperties} = {
        description: {
            fontSize: "var(--mantine-font-size-md)",
            textAlign: "center",
            color: "#FFF",
            fontWeight: 500,
            letterSpacing: "0.5rem",
            height: "fit-content",
        },
        title: {
            fontSize: "var(--mantine-font-size-lg)",
            textAlign: "center",
            color: "#FFF",
            fontWeight: 700,
            height: "fit-content",
        },
        root: {
            padding: "10% 0",
            backgroundColor: "#b94d5c",
        }
    }

    return (
        <Center style={styles["root"]}>
            <Stack gap={"xs"}>
                <span style={styles["description"]}>
                    {description}
                </span>
                <span style={styles["title"]}>
                    {title}
                </span>
            </Stack>
        </Center>
    )
}