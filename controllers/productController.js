const Product=require("../models/productModels");
const ErrorHander=require("../utils/errorhandler")
const catchAsyncErrors=require('../middleware/catchAsyncErrors')
const ApiFeatures = require("../utils/apifeatures");


//create product
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
  // const product=await Product.create(req.body);

  // res.status(201).json({
  //     success:true,
  //     product
  // })
  const product = await Product.create(req.body);

res.status(201).json({
  success: true,
  product,
});
})

exports.getAllProducts=catchAsyncErrors(async(req,res)=>{
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    let products = await apiFeature.query;
   

    // let filteredProductsCount = products.length;
  
    // apiFeature.pagination(resultPerPage);
  
    products = await apiFeature.query;
  
    res.status(200).json({
      success: true,
      products,
    //   productsCount,
    //  resultPerPage,
    //   filteredProductsCount,
    });
})
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    // return res.status(500).json({
    //   success:false,
    //   message:'product not found'
    // })
    return next(new ErrorHander("Product not found", 404));
  }
  
product = await Product.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators: true,
  useFindAndModify: false,
});

res.status(200).json({
  success: true,
  product,
});
})


exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
      // return res.status(500).json({
      //     success:false,
      //     message:'product not found'
      //   })
      return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
 

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

  exports.getProductDetails =catchAsyncErrors( async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
        // return res.status(500).json({
        //     success:false,
        //     message:'product not found'
        //   })
        return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  });