const Product_modal = ({ product = null }) => {
  return (
    <div>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative lg:min-w-[660px]">
          <label
            htmlFor="product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Product</h3>

          <form>
            <div className="grid md:grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text">Name *</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter name of the product"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Category *</span>
                </label>
                <select
                  name="category"
                  className="input input-bordered w-full"
                  required
                >
                  <option value="">Choose a category</option>
                  <option value="phone">Phone</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Details *</span>
                </label>
                <input
                  required
                  name="details"
                  as="textarea"
                  placeholder="Enter product details"
                  className="input input-bordered w-full min-h-[100px]"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  name="description"
                  as="textarea"
                  placeholder="About your services"
                  className="input input-bordered w-full min-h-[100px]"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Price *</span>
                </label>
                <input
                  required
                  type="number"
                  name="price"
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Image 1 (Main) *</span>
                </label>
                <input
                  required
                  type="file"
                  name="image1"
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Image 2</span>
                </label>
                <input
                  type="file"
                  name="image2"
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Image 3</span>
                </label>
                <input
                  type="file"
                  name="image3"
                  className="file-input file-input-bordered w-full"
                />
              </div>
            </div>

            <button className="btn_main mt-6 float-right" type="submit">
              {product ? "Update" : "ADD Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product_modal;
