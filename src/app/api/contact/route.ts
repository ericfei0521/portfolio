import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const SHEET_ID = '13dxOnDbg32HB06W2OT4QqkImiOPJBdwbnsiizZz8IMo';
const RANGE = 'Sheet1!A:C'; // Adjust the range as per your sheet structure

const auth = new google.auth.GoogleAuth({
    credentials: {
        // Replace with your service account credentials
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const POST = async (req: NextRequest) => {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ message: 'Name, email, and message are required.' }, { status: 400 });
    }

    try {
        // Append to Google Sheet
        const sheets = google.sheets({
            version: 'v4',
            auth: auth,
        });
        await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: RANGE,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[name, email, message]],
            },
        });

        return NextResponse.json({ message: 'Send successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
};
