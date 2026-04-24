# Environment Variables

All secrets live in `.env.local` (gitignored). Never commit this file.

## Required

### Sanity CMS
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (e.g. `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version date (default: `2026-02-02`) |

### Supabase
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL from Supabase dashboard |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Anon/public key |

### Resend (email)
| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from resend.com |
| `RESEND_FROM_EMAIL` | Sender address (must be a verified domain) |
| `CONTACT_RECIPIENT_EMAIL` | Where contact/join form notifications go |

## Optional

| Variable | Default | Description |
|---|---|---|
| `WHATSAPP_NUMBER` | `18299328036` | Number used in confirmation email WhatsApp link |
| `CONTACT_DEBUG_RESEND` | `false` | Set to `true` to expose Resend error details in responses (dev only) |

## Supabase Table

The `member_applications` table schema is in `supabase/member_applications.sql`. Run it in the Supabase SQL editor to create the table.

Key columns: `first_name`, `last_name`, `email` (unique), `phone`, `date_of_birth`, `address`, `city`, `membership_type` (enum: `simpatizante` | `militante` | `voluntario`), `interests` (text[]), `availability` (text[]), `motivation`, `receive_updates`, `status` (default: `new`).
