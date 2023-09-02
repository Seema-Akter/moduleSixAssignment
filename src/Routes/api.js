// router path
const express= require('express');
const router= express.Router();
const blogController= require('../Controllers/blogController');
const blogDetailsController= require('../Controllers/blogDetailsController');
const commentController= require('../Controllers/commentController');
const messageController= require('../Controllers/messageController');
const portfolioController= require('../Controllers/portfolioController');
const productController= require('../Controllers/productController');
const profitController= require('../Controllers/profitController');
const projectController= require('../Controllers/projectController');
const serviceController= require('../Controllers/serviceController');
const titleController= require('../Controllers/titleController');

// blogController API
router.get('/blog/create',blogController.create)
router.get('/blog/read',blogController.read)
router.get('/blog/delete',blogController.delete)
router.get('/blog/update',blogController.update)

// blogDetailsController API
router.get('/blogdetails/create',blogDetailsController.create)
router.get('/blogdetails/read',blogDetailsController.read)
router.get('/blogdetails/delete',blogDetailsController.delete)
router.get('/blogdetails/update',blogDetailsController.update)

// commentController API
router.get('/Comment/create',commentController.create)
router.get('/Comment/read',commentController.read)
router.get('/Comment/delete',commentController.delete)
router.get('/Comment/update',commentController.update)

// messageController API
router.get('/Message/create',messageController.create)
router.get('/Message/read',messageController.read)
router.get('/Message/delete',messageController.delete)
router.get('/Message/update',messageController.update)

// portfolioController API
router.get('/Portfolio/create',portfolioController.create)
router.get('/Portfolio/read',portfolioController.read)
router.get('/Portfolio/delete',portfolioController.delete)
router.get('/Portfolio/update',portfolioController.update)

// productController API
router.get('/Product/create',productController.create)
router.get('/Product/read',productController.read)
router.get('/Product/delete',productController.delete)
router.get('/Product/update',productController.update)

// profitController API
router.get('/Profit/create',profitController.create)
router.get('/Profit/read',profitController.read)
router.get('/Profit/delete',profitController.delete)
router.get('/Profit/update',profitController.update)

// projectController API
router.get('/Project/create',projectController.create)
router.get('/Project/read',projectController.read)
router.get('/Project/delete',projectController.delete)
router.get('/Project/update',projectController.update)

// serviceController API
router.get('/Service/create',serviceController.create)
router.get('/Service/read',serviceController.read)
router.get('/Service/delete',serviceController.delete)
router.get('/Service/update',serviceController.update)
// titleController API
router.get('/Title/create',titleController.create)
router.get('/Title/read',titleController.read)
router.get('/Title/delete',titleController.delete)
router.get('/Title/update',titleController.update)

module.exports=router