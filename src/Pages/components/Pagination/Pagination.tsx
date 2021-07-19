import ReactPaginate from "react-paginate";
import s from "./pagination.module.css";

export interface IPagination {
  count: number;
  cb({ selected }: { selected: number }): void;
}

export const Pagination = ({ count, cb }: IPagination) => {
  return (
    <div
      className={`${s.entity__pagination__wrapper} ${
        true ? s.entity__with__line : ""
      }`}
    >
      <div className={s.entity__pagination}>
        <ReactPaginate
          breakLabel={"..."}
          breakLinkClassName={s.entity__number__link}
          pageCount={Math.round(count / 10)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          previousLabel={"«"}
          nextLabel={"»"}
          onPageChange={cb}
          previousLinkClassName={s.prev__link}
          nextLinkClassName={s.next__link}
          containerClassName={s.entity__pagination}
          activeClassName={s.entity__number__page__active}
          pageLinkClassName={s.entity__number__page}
          activeLinkClassName={s.entity__number__page__active__link}
        />
      </div>
    </div>
  );
};
