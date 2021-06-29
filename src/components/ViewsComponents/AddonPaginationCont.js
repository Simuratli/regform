import React, {useEffect, useState} from "react";

import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getAddonCard} from "../../store/reducers/addonReducer/actions/addonCardAction";

const PaginationCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 0 50px 0;

  .box {
    display: flex;
    align-items: center;
  }

  .pages-counter {
    display: flex;
    margin: 0 5px;
  }

  button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 1px solid #e3e3e3;
  }

  button:hover {
    box-shadow: none;
  }

  .page {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    border: 1px solid #1A4F95;
    font-weight: 500;
    color: #1A4F95;

    &:hover {
      cursor: pointer;
    }
  }

  .current {
    background: #1A4F95;
    font-weight: 700;
    color: #fff;
  }
`;

const AddonPaginationCont = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const state = useSelector((state) => state);
  const {addon} = state;
  const dispatch = useDispatch();
  const pages = addon.totalPages;

  const setPages = (e) => {
    const offset = +e.target.attributes.getNamedItem('offset').value;
    if (currentPage !== offset) {
      setCurrentPage(offset);
      dispatch(getAddonCard(offset))
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [localStorage.getItem("sortAddonsBy")]);

  return (
    <PaginationCont>
      <div className="box">
        <button
          onClick={() => {
            currentPage >= 1 && setCurrentPage((pr) => pr - 1);
            dispatch(getAddonCard(currentPage - 1));
          }}
          disabled={currentPage === 1 && 'disabled'}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 10.58L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.58Z"
              fill={currentPage === 1 ? "#E3E3E3" : "#383680"}
            />
          </svg>
        </button>

        <div className="pages-counter">
          {pages.map((r) => {
            return (
              <div
                onClick={setPages}
                className={`page ${r === currentPage && "current"}`}
                key={r}
                offset={r}
              >
                {r}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            currentPage !== pages.length && setCurrentPage((pr) => pr + 1);
            dispatch(getAddonCard(currentPage + 1));
          }}
          disabled={currentPage === pages.length && 'disabled'}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.589844 10.58L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.58Z"
              fill={currentPage !== pages.length  ? "#383680" : "#E3E3E3"}
            />
          </svg>
        </button>
      </div>
    </PaginationCont>
  );
};

export default AddonPaginationCont;
