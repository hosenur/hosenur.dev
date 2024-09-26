import BlurFade from "./BlurFade";

const images = [
    {
        idx: 0,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/DSC_0042.jpg?updatedAt=1727295861612",
    },
    {
        idx: 1,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/IMG_5066.jpg?updatedAt=1727295600075",
    },
    {
        idx: 2,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/DSC_0165.jpg?updatedAt=1727295711500",
    },
    {
        idx: 3,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/IMG_0292.jpg?updatedAt=1727295862314",
    },
    {
        idx: 4,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/DSC_0149.jpg?updatedAt=1727296041299",
    },
    {
        idx: 5,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/IMG_2521.jpg?updatedAt=1727296453158",
    },
    {
        idx: 6,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/IMG_2521.jpg?updatedAt=1727296453158",
    },
    {
        idx: 7,
        url: "https://ik.imagekit.io/rahaman/hosenur.dev/IMG_5799_jpg.jpg?updatedAt=1727296452580",
    }
];





export default function GalleryComponent() {
    return (
        <section id="photos">
            <div className="columns-2 gap-4 ">
                {images.map(({  url, idx }) => (
                    <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                        <img
                            className={`mb-4 size-full rounded-lg object-contain`}
                            src={url}
                            alt={`Random stock image ${idx + 1}`}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
