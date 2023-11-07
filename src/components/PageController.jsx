import Pagination from "react-bootstrap/Pagination";

export const PageController = (props) => {
    const { currentPage, nextPage, prevPage, hasNextPage, hasPrevPage, setPage, totalPages } = props
    const handlePrev = ()=> setPage((cur)=> cur-1)
    const handleNext = ()=> setPage((cur)=> cur+1)
    const handleFirst = ()=> setPage(1)
    const handleLast = ()=> setPage(totalPages)
    const handleNextShow = ()=> setPage(nextPage)
    const handlePrevShow = ()=> setPage(prevPage)
    return (
        <Pagination>
        {hasPrevPage&&<Pagination.First onClick={handleFirst}/>}
        {hasPrevPage&&<Pagination.Prev onClick={handlePrev}/>}
        {currentPage>2&&<Pagination.Item onClick={handleFirst}>{1}</Pagination.Item>}
        {hasPrevPage&&<Pagination.Ellipsis />}

        {hasPrevPage&&<Pagination.Item onClick={handlePrevShow}>{prevPage}</Pagination.Item>}
        <Pagination.Item active>{currentPage}</Pagination.Item>
        {(hasNextPage&&nextPage !== totalPages)&&<Pagination.Item onClick={handleNextShow}>{nextPage}</Pagination.Item>}

        {hasNextPage&&<Pagination.Ellipsis />}
        {currentPage<totalPages&&<Pagination.Item onClick={handleLast}>{totalPages}</Pagination.Item>}
        {hasNextPage&&<Pagination.Next onClick={handleNext}/>}
        {hasNextPage&&<Pagination.Last onClick={handleLast}/>}
        </Pagination>
    );
};
