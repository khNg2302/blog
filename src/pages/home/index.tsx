import { Page } from "@/components/page"
import { PrimaryAppButton, SecondaryAppButton } from "@/components/ui/common/button/Button"
import { PageTitle } from "@/components/ui/common/text/title/Page"
import { DisplayCenterItem } from "@/components/ui/layout/displayItem/DisplayCenterItem"
import { DisplayColumnCenterBox } from "@/components/ui/layout/displayItem/DisplayColumnCenterBox"
import { PagenameEnum } from "@/stores/menu"

export const HomePage = () => {
  return (
    <Page name={PagenameEnum.home}>

      <DisplayColumnCenterBox>

        <PageTitle>Site Name</PageTitle>
        <p className="">Description</p>
        <DisplayCenterItem className="gap-2">
          <SecondaryAppButton>Learn more</SecondaryAppButton>
          <PrimaryAppButton>Get started</PrimaryAppButton>
        </DisplayCenterItem>
      </DisplayColumnCenterBox>
    </Page>
  )
}