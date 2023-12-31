import { useSnapshot } from "valtio";
import { TestDataWithArray, createNewData } from "./types";
import { Root } from "./01-RootCommon";
import { Button, PartIntro, Section, UpdateCounterLabel } from "../../ui";
import { useRenderCounter } from "../../ui/04-update-counter";

function Intro() {
    return (
        <PartIntro section="Wrong 2 - responsive but renders everything on every change" h1={false}>
            {/* <h2>  </h2> */}
            <p>
                (03) Option 2 is to map on the objects in the snapshot and pass the
                appropiate proxy to the child container (via the index). This also looks
                "nice" from a JS perspective but it causes a problem that now any change
                to any objects makes the entire component tree to render.
            </p>
        </PartIntro>
    );
}

export const RootArrayWrong2 = ({ data }: { data: TestDataWithArray; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <Section>
            <Intro />

            <UpdateCounterLabel label="Array renders" updateCnt={cnt} />

            {snap.objects.map((o, i) => (
                <Root data={data.objects[i]} key={i} />
            ))}

            <Button onClick={() => data.objects.push(createNewData(data.objects.length))}>
                Add
            </Button>
        </Section>
    );
};
