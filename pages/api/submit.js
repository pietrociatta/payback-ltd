import { z } from "zod"
import { google } from "googleapis"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
  const credentials = {
    type: "service_account",
    project_id: "fraud-recovery",
    private_key_id: "79ed04da30b784fa9cbe38f18412f5b9fa662819",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvEt/U7haFLj/i\nxchrQcCSF0DHgqYh/yfoiAKmqTnzNTGtDMGcjahq9EPtwDP4QxMbFuPwYqLI8Eph\ntuI4dfazbABffvU9zdNc8k+YYpwbP2R1mPWYaYdRN5JZJh8+k+sfp1Zau/e6QXSm\n3QybHciRGL7Q5Eb0WNJlmV/4LVDpBW/OCQ7YdeYz3/lFeuaIdrcJrARdw0sP5wEh\n5j4qrKD2aMZmQOI4NYpcGOYtV0hucvbBmwXD8vs+r33/SFqy9SwKZZLd6mwhbF7u\n4lGayD/A1+U3x01fww30EXwm9Xcq0jVJrYf1UiADlAsV0+c3HayIjm3gpzBGbpA5\n/6pCaliXAgMBAAECggEACg2c6DOML08F4LlEj96ONs76a5p1r/UT1X2RHWd3sIVC\njX8MIFFegiNcDtGr8LRO60E0vi+2/+MTrZApZff/V+bUD9r3LS3d1o2ctkTo7upq\n4KymybI7NxXOvXf71x8tiYgVfg9WI3SXxLv9YDjlGzcSQGXwKlIHy6+NFby205j7\nT5GyWkEMHPn8oMDED4bXCqp9SoJgkLNpv9gPOomG15MjrKBW6mn6Ltr/tatBhr5t\nvJ8M1l+Lzp37AsF6UsuOPx94X723Vwhg3qolV2xdzFxSGkQIfRJfz9eGAN6A7sKG\nBv1LTJXAUEY+jRuvoswRbSZPs3rQw1HJpKgENERePQKBgQDUeI10J4EeFRhBM8V3\n3bQbYwvOKBTir9Y8f+TiHkzqGhXB07StZ46qfk1Y0kV+5N1jAeWgUOf2mo6jRqeA\ntwx2AqlQdx4FqQBZNr1riWjJxxywUmq0owfAhkkuIFluhzyFnyoVP36ye6qDx81W\nk5r6Y6xHzrq9b7YafKXEbbtwMwKBgQDS8PRSF1BjD2ETP2pYTQAvz09I7G8F/BxG\nSsvP0+p0GbRygrlaFt4/Uv9QqKscKvwC2DSWEMgOJZMg3Bc7EJ4M4vI0KAE+YvHx\nm6rqRiBFRHnulDmyJrRDT/bpp6OF8bw68nuef+fQrtiU6AMgcFI2axOEofrafJca\nUTv9XKXCDQKBgCEiG4z9jBkQ2RNx611h6XBL5c9kWL1xBkuw9hR8/SmUn8f2J7rS\n52CXCaDMSaIcNpn19cUmWMYQHCZCImTkJsFQcO7nZHsle7Rt4OQgLYMp1cN5VsKM\nmezgBBF5Yfjmhf2gcIOXvz4+Ir0iL1dM9WIOoRMhneVkwlUnEwKqygwZAoGAZL2k\nwWvW/WhD4VBg9ojXtP2aDOa14zLTQhLIoZnAl/AKyMF7yfWv8KgvvRLAnXQ95RHi\nk2SyVmdFi+Twx0mZYegk6hnM9kGE8PF6P+Z71PjuDq4Fm/p2DsuqzU49f2PClJhn\nx3uod3Z5gywHCj/6U3jx2l8Nkbj85Rm0v7y2gSUCgYEAip2wxd0SUBb1+iNhiIJQ\n2hQMMSW2bzALqdR1zW0NbbfdAmgwaLlKKESLTztLzdbZJ9fNi1QjhxkpNmWjwFQy\nfKwjunauv6O/MHwjjaWERBBExVAelMKaHPEcmj6e22GM+LUyDnjFgpr9Cy1bLiz5\nwHxj+45mjax/GAlhhSiiuXc=\n-----END PRIVATE KEY-----\n",
    client_email: "servizio@fraud-recovery.iam.gserviceaccount.com",
    client_id: "105112912797575357592",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/servizio%40fraud-recovery.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }
  const writeToSheet = async (data) => {
    const SPREADSHEET_ID = "1ewNAOfML7IyRxEb2p4nh41oQXTPuUWPWU8ySmJ630FA"
    const client = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    )
    const sheets = google.sheets({ version: "v4", auth: client })
    const range = "A:B" // Adjust based on your needs

    try {
      await client.authorize()
      const response = sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range,
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        resource: {
          values: [
            [
              data.name,
              data.email,
              data.phone_number,
              data.scam_type,
              data.amount_invested,
              data.message,
            ],
          ],
        },
      })

      await response.then((res) => {
        console.log(res)
        return res
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "Internal server error" })
    }
  }

  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, "Name must be between 1 and 32 characters")
      .max(32)
      .regex(/^[A-Za-z\s]+$/, "Name must contain only characters"),
    last_name: z
      .string()
      .trim()
      .min(1, "Last name must be between 1 and 32 characters")
      .max(32)
      .regex(/^[A-Za-z\s]+$/, "Last name must contain only characters"),
    phone_number: z.string().min(5, "Invalid phone number"),
    email: z.string().email("Invalid email address"),
    scam_type: z.enum(
      [
        "binary_options",
        "cryptocurrency",
        "forex",
        "stock_trading",
        "property_scam",
        "romance_scam",
        "other",
      ],
      "Invalid scam type"
    ),
    amount_invested: z.string(),
    message: z
      .string()
      .trim()
      .max(256, "Message must not exceed 256 characters"),
  })

  try {
    // Parse and validate the incoming request data
    const formData = formSchema.parse(req.body)

    // Assuming writeToSheet is an asynchronous function that writes data to a Google Sheet
    const respon = await writeToSheet(formData)

    console.log(respon)
    // Respond with success message
    res.status(200).json({ message: "Form data received." })
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return a 400 status code for validation errors
      return res.status(400).json({ errors: error.errors })
    }
    // For other types of errors, return a 500 status code and a generic error message
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
}
