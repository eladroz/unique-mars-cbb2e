import dynamic from 'next/dynamic';
import { registerComponents } from '@stackbit/components';
import { componentsMap } from '@stackbit/components/dist/components-map';
import typistComponents from 'stackbit-typist';

registerComponents({
    ...componentsMap,
    ...typistComponents
});
