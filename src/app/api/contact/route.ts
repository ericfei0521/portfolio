import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ message: 'Name, email, and password are required.' }, { status: 400 });
    }

    try {
        await prisma.message.create({
            data: {
                name,
                email,
                message,
            },
        });
        return NextResponse.json({ message: 'Send successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
};
