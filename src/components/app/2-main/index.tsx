import { HTMLAttributes } from 'react';
import { Introduction } from '@/components/pages';
import { IntroSimple, Root, RootIntro, RootArrayWrong1, RootArrayWrong2, RootArrayCorrectByLength, RootArrayCorrectByKeys, RootArrayWrapped } from '@/components/pages/01-simple';
import { ComplexObject, complexData1, ComplexObjectWithWrappedInput, complexData2, IntroComplex } from '@/components/pages/02-complex';
import { root, rootArrayw1, rootArrayw2, rootArray, rootArray2, rootArrayWrapped } from '@/components/pages/01-simple/types';
import { classNames } from '@/utils';

export function App2_Main({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("mb-12 px-4 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto debug-screens", className)} {...rest}>
            <Introduction />

            <IntroSimple />
            <Root data={root} />

            <RootIntro />
            <RootArrayWrong1 data={rootArrayw1} />
            <RootArrayWrong2 data={rootArrayw2} />
            <RootArrayCorrectByLength data={rootArray} />
            <RootArrayCorrectByKeys data={rootArray2} />

            <IntroComplex />
            <ComplexObject data={complexData1} />
            <ComplexObjectWithWrappedInput data={complexData2} />

            <RootArrayWrapped data={rootArrayWrapped} />
        </div>
    );
}
