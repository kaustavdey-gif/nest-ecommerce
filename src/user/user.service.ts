import {
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  
  import { User, userDocument } from './schemas/user.schema.js';
  
  @Injectable()
  export class UserService {
    constructor(
      @InjectModel(User.name)
      private readonly userModel: Model<userDocument>,
    ) {}
  
    // Create user
    async createUser(
      userData: Partial<User>,
    ): Promise<userDocument> {
      return this.userModel.create(userData);
    }
  
    // Find user by email
    async findByEmail(
      email: string,
    ): Promise<userDocument | null> {
      return this.userModel.findOne({ email }).exec();
    }
  
    // Find user by ID
    async findById(id: string): Promise<userDocument> {
      const user = await this.userModel
        .findById(id)
        .exec();
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      return user;
    }
  
    // Find all users
    async findAll(): Promise<userDocument[]> {
      return this.userModel.find().exec();
    }
  
    // Delete user
    async delete(id: string): Promise<void> {
      const user = await this.userModel
        .findByIdAndDelete(id)
        .exec();
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
    }
  }
  