import React from "react";
import Dropdown from "./dropdown";

const Pagination = ({
    totalRows,
    pageSize,
    pageNumber,
    handlePageNumber,
    handlePageSize,
    customPageSizes
}) => {
    // Default page sizes if not provided
    const defaultPageSizes = [
        { "label": "10", "value": 10 },
        { "label": "25", "value": 25 },
        { "label": "100", "value": 100 }
    ];

    // Use custom page sizes if provided, otherwise use defaults
    const pageSizes = customPageSizes || defaultPageSizes;

    const noOfPages = Math.ceil(totalRows / pageSize);
    const start = pageNumber * pageSize;
    const end = Math.min((pageNumber + 1) * pageSize, totalRows);

    const goToPrev = () => {
        if (pageNumber > 0) {
            handlePageNumber(pageNumber - 1);
        }
    };

    const goToNext = () => {
        if (pageNumber < noOfPages - 1) {
            handlePageNumber(pageNumber + 1);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mt-4 mb-4 text-xs sm:text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <span>Rows per page</span>
                    <Dropdown
                        options={pageSizes}
                        onChange={handlePageSize}
                        selectedValue={pageSize}
                        className={"w-fit"}
                    />
                </div>
                <div>
                    <p>Showing {start + 1} - {end} of {totalRows} results</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <button
                        className={`py-2 px-4 m-1 border border-gray-400 rounded shadow ${pageNumber === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white hover:bg-gray-100 text-gray-800"}`}
                        onClick={() => handlePageNumber(0)}
                        disabled={pageNumber === 0}
                    >
                        {"<<"}
                    </button>
                </div>
                <div>
                    <button
                        className={`py-2 px-4 m-1 border border-gray-400 rounded shadow ${pageNumber === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white hover:bg-gray-100 text-gray-800"}`}
                        onClick={goToPrev}
                        disabled={pageNumber === 0}
                    >
                        {"<"}
                    </button>
                </div>
                <div>
                    <button
                        className={`py-2 px-4 m-1 border border-gray-400 rounded shadow ${pageNumber === noOfPages - 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white hover:bg-gray-100 text-gray-800"}`}
                        onClick={goToNext}
                        disabled={pageNumber === noOfPages - 1}
                    >
                        {">"}
                    </button>
                </div>
                <div>
                    <button
                        className={`py-2 px-4 m-1 border border-gray-400 rounded shadow ${pageNumber === noOfPages - 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white hover:bg-gray-100 text-gray-800"}`}
                        onClick={() => handlePageNumber(noOfPages - 1)}
                        disabled={pageNumber === noOfPages - 1}
                    >
                        {">>"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Pagination;