import {
    Schema,
    model,
    models,
    type Model,
    type InferSchemaType,
  } from "mongoose";
  
  /* ---------- Schema ---------- */
  const WaitlistSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      joinedAt: { type: Date, default: Date.now },
    },
    { timestamps: true },
  );
  
  /* ---------- Strong typing ---------- */
  type WaitlistDoc = InferSchemaType<typeof WaitlistSchema>; // { email: string; joinedAt: Date; ... }
  
  const WaitlistEntry: Model<WaitlistDoc> =
    models.WaitlistEntry || model<WaitlistDoc>("WaitlistEntry", WaitlistSchema);
  
  export default WaitlistEntry;
  