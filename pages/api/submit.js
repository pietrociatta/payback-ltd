import { z } from "zod"
import { google } from "googleapis"

//const { SPREADSHEET_ID } = require('./config');

export default async function handler(req, res) {
  const credentials = {
    type: "service_account",
    project_id: "zendata-412709",
    private_key_id: "bb03176d9a1c2a5effbffa9273c39317a8c41361",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCe/qSvC8o2oGtX\n0qTuDymXM6atcjJB7aIv2S6sONY1rZdewGt8DTpldhwvmIdtNCumihjrLqNQtS6Q\nF4p9t2/pvnxTdYjHn670I2oSTbQRyt1VLKRiBeBG+qnNBKH9ruogAeEUkC7+U65I\nhK/nhyY4W8KrSRVSOmfPvDPiF7VSs9TE/MLXVo6vwm3YK8vmGZQ8iHtPzEM9bzc4\n0e0JVpxS3LtUGiL9eZP1l/52WwnWeD4uVf0lzfRpMpt678/EK8D6Ok4/4xxUTnZI\ny/8V9uMxE9Y38bPBwSbC8owe6+Rn5S7hiGC61kmoH7Lo4r/AGQfuuD6AZXlDqMeZ\n7Rkh6vG/AgMBAAECggEAAjH2kcv56ju5fmceZ+lDCoBi5p7epl35wY8gHlxdkguY\nrbS+fOxqobUG1jKDHwmLAELgumXkAVotwsJWNQtXhSNqa0xo4+H3XQNPrh8smnJx\n0vuWXb/Ha4k3zRvC/Hr8M1ZKWFfQ9VLZFri/3Xhbig2AW3uJWkOQu3CDphGFzytS\nxuoQnR+Sx9t4fs6QiJDjubc4iWaBGO+7CfXSc2PzNztC44wYLy8qLD0balkNWRW4\ngE8tiB0SfNkGXo4s3HX0N1BkIjRtNysTaetm2a9QXDa3GGWVN65LMps4I1a3/1ex\nCj/43Sc/j7mPlCjPPKV8ODwMZsjcl1Off/A0jH8syQKBgQDcRiv1yiw1ZW1O4vqJ\naYdcJBLZO6cBYsTPjOcTKntD9SVRdZYyRlEKIMu732HZSwJSDa4BJ2X8wknvg5I0\nYSOjYuCpvZepo7fp5n2KkhqcN67tu9kBOILdKe/Ez5hA8lHugBs6n/VkuhlonbQF\nZr8/VLuB8VT0ZkXtU80iXRsGAwKBgQC4yCMsrsZPzzZorUdySUmm3TJZvCUYAQWm\nIGWALjAsz/7bbptrbNffS66g4MktxG7mBO4UwIBgrElY6sBr76bEs0Fx47jU410n\ncDuzQRQAFTZjLHidlO+ocGmKZDaG3eF00S1vtWyurDo0nyhKJgoJhtem8gwLW7xL\nSMb6HMQmlQKBgQCEPbiMkjiiQecy0f/ZWTqDbcDHHBHyOgqwFAZyMjHYpacm1XI7\nco2ah//oJX7IBkk5W68YUD/hU/8xRQsUWTEdGPKJ1SHlHT3/tXmvJHHHUYK6hOkN\n25BtGI0y2fKtIw1fIxe1xWx8cWFptivqhjnQ2pzLsUfwhin7BjGELONZYwKBgEtr\n9V+BnxRoYa7sO2NcoqFnW+vgrctUb3fVdViSgbto0n/Cb9GzRZGxFIA6ACOcMB/X\nF06FHGFZMT8H4q6rzQgwmp/f8UuD2jwExXlvMLiv79kfB8RaTFAWQh3otZDq8+F4\nl/Emvku1pLRh2lIZoLMuxMsxtNTWBs87z2u7XhzZAoGBAJtcUHo0xK0GcdvQroyL\n/JBDCm0ammm0wkGB5HJszDJiv1a2nlYfKsBRvCWiMJrfBqm6iHNtPXVQLu8GvuZ+\nOUo90759XQlX1eRMW1XJM8220gRjj+IwkQRCSZw4FOjqZWIMR8XQnvcnZzyJ+Ugk\nb39oDj46Bmc9dBe+4vn0A8Zl\n-----END PRIVATE KEY-----\n",
    client_email: "admin-799@zendata-412709.iam.gserviceaccount.com",
    client_id: "116925563851367329091",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/admin-799%40zendata-412709.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }
  const writeToSheet = async (data) => {
    const SPREADSHEET_ID = "19sur6zLUHoysnQtEqL5G4KtvXfVdgusas0eAJmOMF-E"
    const client = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    )
    const sheets = google.sheets({ version: "v4", auth: client })
    const range = "Sheet1!A:B" // Adjust based on your needs

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

      console.log(response)
    } catch (err) {
      console.error(err)
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
  if (req.method === "POST") {
    try {
      console.log(req.body)
      const formData = formSchema.parse(req.body)

      await writeToSheet(formData)
      res.status(200).send("Form data received.")
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors })
      }
      // Handle other errors
      console.error(error)
      res.status(500).send("An error occurred on the server.")
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
