"use client"
import React, { useState } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'

const PaginationDetails = ({ pageCountValue }: { pageCountValue: (count: number) => void }) => {
    const [pageCount, setPageCount] = useState<number>(1)

    const updatePageCount = (newPageCount: number) => {
        const validatedPageCount = Math.max(newPageCount, 1);
        setPageCount(validatedPageCount);
        pageCountValue(validatedPageCount);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => updatePageCount(pageCount - 1)} />
                </PaginationItem>
                {pageCount - 1 > 0 && <PaginationItem>
                    <PaginationLink onClick={() => updatePageCount(pageCount - 1)}>
                        {pageCount - 1}
                    </PaginationLink>
                </PaginationItem>}
                <PaginationItem>
                    <PaginationLink isActive>
                        {pageCount}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => updatePageCount(pageCount + 1)}>
                        {pageCount + 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={() => updatePageCount(pageCount + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationDetails
