import React from "react";

interface ProductInterfaceProps {
  imgUrl: string;
  productName: string;
  price: number;
  originalPrice: number;
}

export default function Product({
  imgUrl,
  productName,
  price,
  originalPrice,
}: ProductInterfaceProps) {
  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <a href="javascript:void(0)">
          <img src={imgUrl} alt="product_img" className="w-full" />
        </a>
        <a
          href="javascript:void(0)"
          className="bg-blue-600 w-8 h-8 flex justify-center items-center text-white rounded-full absolute bottom-0 right-0 mr-4 -mb-3"
        >
          <i className="ti ti-basket text-base" />
        </a>
      </div>
      <div className="card-body">
        <h6 className="text-base font-semibold text-gray-600 mb-1">
          {productName}
        </h6>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <h6 className="text-base text-gray-600 font-semibold">${price}</h6>
            <span className="text-gray-500 text-sm">
              <del>${originalPrice}</del>
            </span>
          </div>
          <ul className="list-none flex gap-1">
            <li>
              <a href="javascript:void(0)">
                <i className="ti ti-star text-yellow-500 text-sm" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="ti ti-star text-yellow-500 text-sm" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="ti ti-star text-yellow-500 text-sm" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="ti ti-star text-yellow-500 text-sm" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="ti ti-star text-yellow-500 text-sm" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
