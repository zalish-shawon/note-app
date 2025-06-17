"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user.model");
exports.usersRoutes = express_1.default.Router();
exports.usersRoutes.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield user_model_1.User.create(body);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
    });
}));
exports.usersRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.find();
    res.status(201).json({
        success: true,
        message: "users read successfully",
        user
    });
}));
exports.usersRoutes.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const user = yield user_model_1.User.findById(userId);
    res.status(201).json({
        success: true,
        message: "users read successfully",
        user
    });
}));
exports.usersRoutes.patch("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const updatedBody = req.body;
    const user = yield user_model_1.User.findByIdAndUpdate(userId, updatedBody);
    res.status(201).json({
        success: true,
        message: "User updated successfully",
        user
    });
}));
exports.usersRoutes.delete("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const user = yield user_model_1.User.findByIdAndDelete(userId);
    res.status(201).json({
        success: true,
        message: "User deleted successfully",
        user
    });
}));
