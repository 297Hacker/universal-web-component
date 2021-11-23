import React from 'react';

type paginationProps = {
    id: number
    pages: number[]
    class?: string
};

const Pagination = (props: paginationProps) => {
    let totalPages: any[] = props.pages;
    const page = totalPages.map((page) => {
        return <button className={props.class} key={page.id}>{page}</button>
    });
    return <React.Fragment>
        <button>Previous</button>
        {page}
        <button>Next</button>
    </React.Fragment>
};

export default Pagination;