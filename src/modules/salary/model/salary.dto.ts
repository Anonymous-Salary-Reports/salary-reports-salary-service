import { Education } from './education';
import { EmployerType } from './employerType';
import { RoleDto } from '../../role/model/role.dto';
import { BaseSalaryDto } from './base-salary.dto';
import { IsMongoId, Min } from 'class-validator';

export class SalaryDto extends BaseSalaryDto {
  @IsMongoId()
  id: string;

  roleDto: RoleDto;

  @Min(0, { message: 'Likes cannot be negative' })
  likes: number;

  @Min(0, { message: 'Dislikes cannot be negative' })
  dislikes: number;

  isLikedByCurrentUser: boolean;

  isDislikedByCurrentUser: boolean;

  constructor(
    id: string,
    baseSalary: number,
    extras: number,
    roleDto: RoleDto,
    experienceYears: number,
    education: Education,
    educationInRelevantField: boolean,
    employerType: EmployerType,
    likes: number,
    dislikes: number,
    isLikedByCurrentUser: boolean,
    isDislikedByCurrentUser: boolean,
    vacationDays?: number,
    startYear?: number,
    endYear?: number,
  ) {
    super();
    this.id = id;
    this.baseSalary = baseSalary;
    this.extras = extras;
    this.experienceYears = experienceYears;
    this.education = education;
    this.educationInRelevantField = educationInRelevantField;
    this.vacationDays = vacationDays;
    this.employerType = employerType;
    this.likes = likes;
    this.dislikes = dislikes;
    this.isLikedByCurrentUser = isLikedByCurrentUser;
    this.isDislikedByCurrentUser = isDislikedByCurrentUser;
    this.startYear = startYear;
    this.endYear = endYear;
    this.roleDto = roleDto;
  }
}
