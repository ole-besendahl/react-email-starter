import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type StoreNotificationProps = {
  overline?: string;
  title: string;
  preview: string;
  mainImage: string;
  confirmationTitle?: string;
  confirmationDescription: string;
  buttonText?: string;
  buttonLink?: string;
  deliveryAddress?: {
    name: string;
    address: string;
    city: string;
    country: string;
  };
  orderDetails?: {
    orderItems: {
      name: string;
      quantity: number;
      price: string;
      image: string;
      variant?: string;
    }[];
    subtotal: string;
    taxes: string;
    total: string;
  };
  showPromotion?: boolean;
  showSupport?: boolean;
};

const StoreNotification = ({
  overline,
  title,
  preview,
  mainImage,
  confirmationTitle,
  confirmationDescription,
  buttonText,
  buttonLink,
  deliveryAddress,
  orderDetails,
  showPromotion = false,
  showSupport = true,
}: StoreNotificationProps) => {
  return (
    <Html>
      <Tailwind>
        <Head>
          <title>{title}</title>
          <Preview>{preview}</Preview>
          <Font
            fontFamily="Aeonik"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://getanomalie.com/fonts/aeonik/aeonikvf.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body
          className="bg-white py-[40px]"
          style={{
            fontFamily: "Aeonik, HelveticaNeue, Helvetica, Arial, sans-serif",
          }}
        >
          <Container className="mx-auto max-w-[450px] bg-white">
            {/* Header with Logo and Order Number */}
            <Section className="mb-[12px] text-center">
              <Img
                src="https://533xlsoomko8hsjq.public.blob.vercel-storage.com/brand/anomalie-logo-circuit.png"
                width="40"
                height="auto"
                alt="Company Logo"
                className="mx-auto mt-[12px] h-auto w-[40px] rounded-lg object-cover"
              />

              {overline && (
                <Text className="mt-[24px] text-center font-mono text-[12px] uppercase text-[#6b7280]">
                  {overline}
                </Text>
              )}

              <Heading className="mx-auto mb-[24px] w-[350px] text-center text-[32px] font-normal leading-[32px] text-black">
                {title.split("!")[0]}!
                <br />
                {title.split("!")[1]}
              </Heading>
            </Section>

            {/* Product Section */}
            <Section className="mb-[40px] text-center">
              <Img
                src={mainImage}
                width="500"
                height="300"
                alt="Product"
                className="mx-auto mb-[20px] h-[300px] w-[450px] rounded-lg object-cover"
              />
              <div className="mx-auto my-[40px] w-[350px]">
                {confirmationTitle && (
                  <Heading className="mb-[12px] text-[24px] font-normal leading-[26px] text-black">
                    {confirmationTitle}
                  </Heading>
                )}
                <Text className="mb-[20px] text-[14px] leading-[18px] text-[#6b7280]">
                  {confirmationDescription}
                </Text>

                {/* Delivery Address */}
                {deliveryAddress && (
                  <div className="mb-[20px] text-center">
                    <Text className="text-[14px] font-semibold text-black">
                      Delivery Address:
                    </Text>
                    <Text className="text-[14px] leading-[18px] text-[#6b7280]">
                      {deliveryAddress.name}
                      <br />
                      {deliveryAddress.address}
                      <br />
                      {deliveryAddress.city}, {deliveryAddress.country}
                    </Text>
                  </div>
                )}
              </div>

              <Button
                className="rounded-md bg-black px-6 py-3 text-[14px] font-semibold text-white"
                href={buttonLink}
              >
                {buttonText}
              </Button>
            </Section>

            <Hr className="my-[40px] border border-solid border-black" />

            {/* Order Summary */}
            {orderDetails && (
              <>
                <Section className="mb-[40px]">
                  <div className="mx-auto w-[350px]">
                    <Heading className="mb-[20px] text-center text-[24px] font-normal text-black">
                      Your Order Summary
                    </Heading>
                  </div>
                  <div className="mx-auto w-[450px]">
                    {/* <ul className="m-0 list-none p-0">
                      {orderDetails.orderItems
                        .slice(0, 3)
                        .map((item, index) => (
                          <li
                            key={index}
                            className="mb-[10px] rounded-lg bg-[#F2F2F2] p-[8px]"
                          >
                            <Row>
                              <Column className="w-[80px]">
                                <Img
                                  src={item.image}
                                  width="80"
                                  height="80"
                                  alt="Product"
                                  className="aspect-square w-full rounded-lg object-contain"
                                />
                              </Column>
                              <Column className="pl-[24px]">
                                <Text className="-mb-[12px] text-[14px] leading-[16px] text-black">
                                  {item.name}
                                </Text>
                                {item.variant && (
                                  <Text className="text-[12px] leading-[14px] text-neutral-500">
                                    {item.variant}
                                  </Text>
                                )}
                              </Column>

                              <Column className="pl-[24px] pr-[12px]">
                                <Text className="text-right text-[14px] leading-[16px]">
                                  <span className="mr-[8px] text-neutral-500">
                                    {item.quantity}x
                                  </span>
                                  {item.price}
                                </Text>
                              </Column>
                            </Row>
                          </li>
                        ))}
                    </ul> */}

                    {/* Pricing Breakdown */}
                    <div className="mx-auto w-[350px]">
                      <Row className="-mb-[32px] justify-between font-mono">
                        <Column>
                          <Text className="text-[12px] text-[#6b7280]">
                            SUBTOTAL
                          </Text>
                        </Column>
                        <Column>
                          <Text className="text-right text-[12px] text-[#6b7280]">
                            {orderDetails.subtotal}
                          </Text>
                        </Column>
                      </Row>

                      <Row className="-mb-[8px] justify-between font-mono">
                        <Column>
                          <Text className="text-[12px] text-[#6b7280]">
                            TAXES
                          </Text>
                        </Column>
                        <Column>
                          <Text className="text-right text-[12px] text-[#6b7280]">
                            {orderDetails.taxes}
                          </Text>
                        </Column>
                      </Row>
                      <Hr className="my-[1px] border border-solid border-[#e5e7eb]" />
                      <Row className="-mt-[8px] justify-between font-mono">
                        <Column>
                          <Text className="text-[12px] text-black">TOTAL</Text>
                        </Column>
                        <Column>
                          <Text className="text-right font-sans text-[20px] text-black">
                            {orderDetails.total}
                          </Text>
                        </Column>
                      </Row>
                    </div>
                  </div>
                </Section>
                <Hr className="my-[40px] border border-solid border-black" />
              </>
            )}

            {/* Promotional Section */}
            {showPromotion && (
              <>
                <Section className="rounded-lg bg-[#BAFC50] p-[6px] pb-[24px] text-center">
                  <Img
                    src="https://533xlsoomko8hsjq.public.blob.vercel-storage.com/images/supersalt_packshot_refill.png"
                    width="200"
                    height="120"
                    alt="Promotional"
                    className="mx-auto mb-[16px] h-[220px] w-full rounded-lg bg-white object-contain"
                  />
                  <div className="mx-auto w-[350px]">
                    <Heading className="mb-[12px] text-[24px] font-normal leading-[28px] text-black">
                      Get a month supply for free, when upgrading to a
                      subscription
                    </Heading>
                    <Text className="mb-[20px] text-[14px] leading-[18px] text-black opacity-60">
                      The Starter Kit is a great way to start your journey. But
                      it&apos;s only a 30 day supply. If you love the product,
                      you can upgrade to a subscription and as the owner of a
                      StarterKit, you will get the first month free.
                    </Text>
                  </div>
                  <Button
                    className="rounded-lg bg-black px-6 py-3 text-[14px] font-medium text-white"
                    href="https://getanomalie.com/account/orders"
                  >
                    Subscribe & Save
                  </Button>
                </Section>
                <Hr className="my-[40px] border border-solid border-black" />
              </>
            )}

            {/* Support Section */}
            {showSupport && (
              <Section
                className={`mb-[40px] rounded-lg p-[24px] text-center ${!showPromotion ? "bg-[#BAFC50]" : ""}`}
              >
                <div className="mx-auto">
                  <Text className="mb-[-8px] text-[16px] text-black">
                    Need assistance with your order?
                  </Text>
                  <Text className="text-[12px] text-black">
                    Contact support at{" "}
                    <a
                      href="tel:+4915730414422"
                      className="text-black underline"
                    >
                      +49 1573 0414422
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:support@getanomalie.com"
                      className="text-black underline"
                    >
                      support@getanomalie.com
                    </a>
                  </Text>
                </div>
              </Section>
            )}
          </Container>

          <Container className="mx-auto max-w-[450px] bg-white">
            {/* Footer */}
            <Section className="text-center font-mono">
              <Img
                src="https://533xlsoomko8hsjq.public.blob.vercel-storage.com/brand/anomalie-logo-full.png"
                width="150"
                height="auto"
                alt="Company Logo"
                className="mx-auto mb-[20px] h-auto w-[150px] object-contain"
              />
              <Text className="text-[12px] uppercase leading-[12px] text-[#9ca3af]">
                <br />
                A BRAND OF 5AM GMBH
                <br />
                GROSSE BRUNNENSTRASSE 131A
                <br />
                22763 HAMBURG
                <br />
                GERMANY
                <br />
                CEO: OLE BESENDAHL
                <br />
                <br />–
              </Text>
              <Text className="font-sans text-[12px] uppercase leading-[12px] text-[#9ca3af]">
                <span className="text-[12px]">©</span>{" "}
                {new Date().getFullYear()} ALL RIGHTS RESERVED
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

StoreNotification.PreviewProps = {
  overline: "ORDER #0081-1602",
  title: "Order confirmed! Let's start your supersalt journey.",
  preview:
    "Thank you for your order! Your items are being prepared and will ship soon.",
  mainImage:
    "https://533xlsoomko8hsjq.public.blob.vercel-storage.com/images/Inside_1.jpg",
  confirmationTitle: "Congrats on your new supplements",
  confirmationDescription:
    "We are preparing your order for shipment. Keep an eye on your inbox for updates. Below you find the details for your purchase.",
  deliveryAddress: {
    name: "Ole Besendahl",
    address: "Große Brunnenstraße 131a",
    city: "22763 Hamburg",
    country: "Germany",
  },
  orderDetails: {
    orderItems: [
      {
        name: "Supersalt Subscription",
        quantity: 1,
        price: "69,99€",
        image:
          "https://533xlsoomko8hsjq.public.blob.vercel-storage.com/images/anomalie_supersalt_packshot.png",
        variant: "120g",
      },
      {
        name: "Refill",
        quantity: 2,
        price: "29,99€",
        image:
          "https://533xlsoomko8hsjq.public.blob.vercel-storage.com/images/anomalie_supersalt_packshot.png",
        variant: "120g",
      },
    ],
    subtotal: "69,99€",
    taxes: "11,08€",
    total: "69,99€",
  },
  showPromotion: true,
};

export default StoreNotification;
