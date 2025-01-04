import { NextFunction, Request, Response } from "express";
import { createReferralService } from "../services/referral/create-referral.service";
import { getReferralsService } from "../services/referral/get-referrals.service";
import { checkReferralService } from "../services/referral/check-referral.service";

export const createReferralController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createReferralService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getReferralsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "id",
      sortOrder: (req.query.sortOrder as string) || "desc",
      referralCode: (req.query.referralCode as string) || "",
    };

    const result = await getReferralsService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const checkReferralController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query.referralCode as string;
    const result = await checkReferralService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};