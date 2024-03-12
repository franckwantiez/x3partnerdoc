define({"0":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T1_Sage_X3_Warehousing_Connector.htm",l:-1,t:"Sage X3 - Sage X3 Warehousing connector",i:0.0452911574935162,a:"Introduction Communication between Sage X3 and Sage X3 Warehousing is established using an add-on installed on Sage X3. This add-on acts as a connector. An automaton manages data exchanges between the two products using flat files. This automaton is a data carrier. It monitors the directories and ..."},"1":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T2_Prerequisites.htm",l:-1,t:"Prerequisites",i:0.0452911574935162,a:"Prerequisites Sage X3 and Sage X3 Warehousing must be at the same version level (but their patch level can be different). The add-on must be installed on Sage X3 (Sage X3 is the \"master\" solution). Required parameters must be set up in both solutions."},"2":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T3_Key_features.htm",l:-1,t:"Key features",i:0.0452911574935162,a:"The connector only supports Distribution flows. A site in Sage X3 is a site/depositor in Sage X3 Warehousing. Stocks are managed for finished products (with or without decimals). In Sage X3, you define one generic location. In Sage X3 Warehousing, multiple warehouse locations are managed. If a ..."},"3":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T4_Fonctionnal_flows.htm",l:-1,t:"Functional flows",i:0.0452911574935162,a:"The functional flows supported by the connector are listed below. Flows originating from Sage X3 When the following elements are created in Sage X3, the data is sent to Sage X3 Warehousing. Products-sites Purchase orders (the purchase order must be for a single site, the purchase site must be the ..."},"4":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T5_Site_architecture.htm",l:-1,t:"Site architecture",i:0.0452911574935162,a:"One Sage X3 site for one Sage X3 Warehousing site/depositor A site in Sage X3 is a site/depositor in Sage X3 Warehousing. The rule is as follows: (Company, site) Sage X3 = (Site, depositor) Sage X3 Warehousing In Sage X3, the WMS responsibility check box must be selected in the Details section of ..."},"5":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T6_Location_architecture.htm",l:-1,t:"Location architecture",i:0.0452911574935162,a:"In Sage X3, you define one generic location. To manage multiple warehouse locations, you can use Sage X3 Warehousing. In Sage X3, the generic location must be defined in the Details section of the Sites function (GESFCY): The WMS responsibility check box must be selected. The generic location ..."},"6":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T7_Stock_architecture.htm",l:-1,t:"Stock architecture",i:0.0452911574935162,a:"The stock of a product-site can be managed in Sage X3 or Sage X3 Warehousing, but not both. The table below presents the stock characteristics managed in Sage X3 and their equivalent values in Sage X3 Warehousing, including limits of use. You must make sure to use the same units of measure in both ..."},"7":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T8_Product_architecture.htm",l:-1,t:"Product architecture",i:0.0452911574935162,a:"A product can be used on multiple sites. The concept of \"product-site\" is used to determine if the product must be managed in Sage X3 or in Sage X3 Warehousing. To use products-sites, the following data must be defined in Sage X3: Site records (GESFCY), Details section: The WMS responsibility check ..."},"8":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T9_Product_site_flow.htm",l:-1,t:"Product-site flows",i:0.0452911574935162,a:"Creation rules A product-site (GESITG) is created in Sage X3, then sent and created in Sage X3 Warehousing as a product (GESTIM) for the corresponding site/depositor. Cancellation rules A product-site cannot be deleted if this product is assigned stock in Sage X3 Warehousing. Even if the product has ..."},"9":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T10_Purchase_order_flow.htm",l:-1,t:"Purchase order flow",i:0.0452911574935162,a:"Purchase order flows EI: Expected input DI: Direct input Creation rules The connector only processes purchase orders created in the Orders function (GESPOH), before sending them to Sage X3 Warehousing. The connector only processes purchase order lines linked to products managed in Sage X3 ..."},"10":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T11_Sales_order_flow.htm",l:-1,t:"Sales order flows (allocation)",i:0.0452911574935162,a:"DO: Delivery order Creation rules The connector only processes sales orders created in the Orders function (GESSOH), before sending them to Sage X3 Warehousing. Sales orders are allocated in Sage X3 and the allocation lines are sent to Sage X3 Warehousing (JADECLOL - Triggering of DO transmission ..."},"11":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T12_Customer_return_flow.htm",l:-1,t:"Customer return flows",i:0.0452911574935162,a:"EI: Expected input DI: Direct input Creation rules Customer returns (GESSRH) are created in Sage X3 and sent to Sage X3 Warehousing as expected inputs. The lines are only transferred if they are linked to a product managed in Sage X3 Warehousing. Update rules You cannot update a customer return line ..."},"12":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T13_Inter-sites_transfer_flow.htm",l:-1,t:"Intersite transfer flows",i:0.0452911574935162,a:"DI: Direct input Creation rules Intersite transfers (GESSIS) are created in Sage X3 and sent to Sage X3 Warehousing as expected inputs. The lines are only transferred if they are linked to a product managed in Sage X3 Warehousing. Update rules You cannot update an intersite transfer if it has ..."},"13":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T14_Quantitative_adjustments_flow.htm",l:-1,t:"Quantitative adjustment flows",i:0.0452911574935162,a:"Creation rules Quantitative adjustment movements are created in Sage X3 Warehousing and transmitted to Sage X3: Miscellaneous receipts are generated in Sage X3 for the following types of adjustment: creation, quantity increase or addition to a container. Miscellaneous issues are generated in Sage X3 ..."},"14":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T15_Qualitative_adjustments_flow.htm",l:-1,t:"Qualitative adjustment flows",i:0.0452911574935162,a:"Creation rules Qualitative adjustment movements (for example, stock status change or expiration date update) are created in Sage X3 Warehousing and then sent to Sage X3. Limits and recommendations The lot number update is not an adjustment supported by the connector. If you need to update a lot ..."},"15":{y:0,u:"../Content/How-to guides/Common data/Sage X3 - Sage Warehousing Connector/T16_Stock_image_flow.htm",l:-1,t:"Stock image flow",i:0.0452911574935162,a:"Stock image flows Creation rules The Sage X3 Warehousing stock image is generated at a given time, which can be set up (for example, at 00:01).  The stock comparison launched in Sage X3 is used to compare the Sage X3 Warehousing stock image with the Sage X3 stock image, which is extracted when ..."},"16":{y:0,u:"../Content/Dummy.htm",l:-1,t:"Dummy topic",i:0.0575125806525562,a:"Lorem ipsum dolor sit amet Nam ultricies eu libero a semper. Suspendisse eu est consequat, tempus ipsum eget, fermentum odio. Maecenas ut dapibus leo. Nunc consequat congue est. Duis in arcu id nisl condimentum rutrum. Integer eget ligula imperdiet, condimentum libero sit amet, finibus libero.  ..."},"17":{y:0,u:"../Content/About.htm",l:-1,t:"Master template - MasterTopNav",i:0.0575125806525562,a:"Importing files from the master template The master template is used as a project import to update shared files in other projects; such as stylesheets (CSS), page layouts, and glossaries. Important Be very careful when you edit files in the master template project, and make sure that your changes ..."},"18":{y:0,u:"../Content/Sitemap.htm",l:-1,t:"Sitemap",i:0.0452911574935162,a:"Help sitemap."},"19":{y:0,u:"../Content/Styles.htm",l:-1,t:"Styles",i:0.0575125806525562,a:"Vestibulum a metus blandit purus semper venenatis tempor vel magna. Maecenas ultrices est et fringilla ornare. Cras quis aliquet odio, at ullamcorper sem. Heading one [h1] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum nec est et scelerisque. Cras vestibulum pellentesque velit, ..."},"20":{y:0,u:"../Content/Topic.htm",l:-1,t:"Topic heading",i:0.0575125806525562,a:"Topic heading Some text."},"21":{y:1,u:"../MicroContent/Resources/Micro content/Micro content examples/micro-content.htm#micro-content",l:13,t:"Micro content",m:0},"22":{y:1,u:"../MicroContent/Resources/Micro content/Micro content examples/styles.htm#styles",l:6,t:"Styles",m:1},});