"use client"

import { BrandBanner } from "@/components/brand-banner"
import { useI18n } from "@/lib/i18n"

export function NoirvaelBanner() {
  const { t } = useI18n()
  return <BrandBanner image="/NOIRVAEL/NOIRVAEL14.jpeg" align="center" />
}
