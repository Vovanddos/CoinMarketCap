import React, {FC} from 'react';

interface ThProps {
    getClassNamesFor: (className: string) => string
    requestSort: (sortKey: string) => void
    headTitle: {req: string, title: string }[]
}

const Thead: FC<ThProps> = ({getClassNamesFor, requestSort, headTitle}) => {

    return (
        <tr>
            {headTitle.map((item:{req: string, title: string}) => (
                <th key={item.req}>
                    <h1
                        onClick={() => requestSort(item.req)}
                        className={getClassNamesFor(item.req)}
                    >
                        {item.title}
                    </h1>
                </th>
            ))}
        </tr>
    );
};

export default Thead;
