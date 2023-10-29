import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get('title') || 'Hello World';
    const font = fetch(
        new URL('../../public/fonts/thunder.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData = await font;

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundImage: 'url(https://products.ls.graphics/mesh-gradients/images/61.-Lavender.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}
            >
                <div
                    style={{
                        marginLeft: 190,
                        marginRight: 190,
                        display: 'flex',
                        fontSize: 130,
                        fontFamily: 'Thunder',
                        fontStyle: 'normal',
                        color: 'black',
                        lineHeight: '120px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {postTitle}
                </div>
            </div>
        ),
        {
            width: 1920,
            height: 1080,
            fonts: [
                {
                    name: 'Thunder',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    );
}