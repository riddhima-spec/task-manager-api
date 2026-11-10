import cors from 'cors';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import pg from 'pg';
import routes from './routes/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
 
