
import { Document } from 'mongoose'

export type State = {
    correlationId?: string;
    out?: any;
};

export type Hero = {
    id?: number;
    name?: string;
    hasStar?: boolean;
};

export type HeroDocument = Hero & Document;
