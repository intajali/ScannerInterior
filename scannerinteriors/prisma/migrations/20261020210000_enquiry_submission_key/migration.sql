-- AlterTable
ALTER TABLE "Enquiry" ADD COLUMN "submissionKey" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Enquiry_submissionKey_key" ON "Enquiry"("submissionKey");
